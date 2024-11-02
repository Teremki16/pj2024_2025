using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;

public class SnakeController : MonoBehaviour
{
   [SerializeField]
   private GameObject foodPref, tailPref;

    private GameObject food;

    private float stepRate, currentAngle;

    private Vector2 move;

    private List<Transform> tail = new List<Transform>();

    private bool isFoodEaten;

    private Vector2 lBorderPos, rBorderPos, uBorderPos, dBorderPos;
    private GameController controller;
    private bool isGameOver, canTurn;
    private float turnTime;


    private void SpawnFood()
    {
        float x = Random.Range(lBorderPos.x, rBorderPos.x);
        float y = Random.Range(dBorderPos.y, uBorderPos.y);
        food = Instantiate(foodPref, new Vector2(x, y), Quaternion.identity);
    }

    private void Movement()
    {
        Vector2 v = transform.position;
        transform.Translate(move);
        if (isFoodEaten)
        {
            GameObject g = Instantiate(tailPref, v, Quaternion.identity);
            g.GetComponent<Renderer>().material.color = this.GetComponent<Renderer>().material.color;
            tail.Insert(0, g.transform);
            isFoodEaten = false;
        }
        else if (tail.Count > 0)
        {
            tail.Last().position = v;
            tail.Insert(0, tail.Last());
            tail.RemoveAt(tail.Count - 1);
        }
    }
    private void Start()
    {
        currentAngle = 0.0f;
        stepRate = 0.3f;
        isFoodEaten = false;
        controller = GameObject.Find("GameController").GetComponent<GameController>();
        lBorderPos = GameObject.Find("WallL").transform.position;
        rBorderPos = GameObject.Find("WallR").transform.position;
        uBorderPos = GameObject.Find("WallU").transform.position;
        dBorderPos = GameObject.Find("WallD").transform.position;
        InvokeRepeating("Movement", 0.1f, stepRate);
        SpawnFood();
        canTurn = true;
        turnTime = Time.time;
    }

    private void SetDirection()
    {
        if (canTurn)
        { 
        if (Input.GetKeyDown(KeyCode.A) && currentAngle != 270f) 
        {
            currentAngle = 90f;
                canTurn = false;
                turnTime = Time.time;
        }
        if (Input.GetKeyDown(KeyCode.D) && currentAngle != 90f) 
        {
            currentAngle = 270f;
                canTurn = false;
                turnTime = Time.time;
            }
        if (Input.GetKeyDown(KeyCode.W) && currentAngle != 180f) 
        {
            currentAngle = 0f;
                canTurn = false;
                turnTime = Time.time;
            }
        if (Input.GetKeyDown(KeyCode.S) && currentAngle != 0f) 
        {
            currentAngle = 180f;
                canTurn = false;
                turnTime = Time.time;
            }
       }
    }
        private void Update()
    {
        SnakeBehaviour();
        if (Input.touchCount > 0 || Input.GetKeyDown(KeyCode.Space))
        {
            move = Vector2.up;
        }
        if (food == null) SpawnFood();
    }

    private void SnakeBehaviour()
    {
        SetDirection();
        if(Time.time > turnTime + 0.2f)
        {
            canTurn = true;
        }
        transform.localEulerAngles = new Vector3(0, 0, currentAngle);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "Food")
        {
            Destroy(collision.gameObject);
            isFoodEaten = true;
            SpawnFood();
        }
        if(collision.gameObject.name == "WallU" && currentAngle == 0f)
        {
            transform.position = new Vector2(transform.position.x, dBorderPos.y);
        }
        if (collision.gameObject.name == "WallD" && currentAngle == 180f)
        {
            transform.position = new Vector2(transform.position.x, uBorderPos.y);
        }
        if (collision.gameObject.name == "WallL" && currentAngle == 90f)
        {
            transform.position = new Vector2(rBorderPos.x, transform.position.y);
        }
        if (collision.gameObject.name == "WallR" && currentAngle == 270f)
        {
            transform.position = new Vector2(lBorderPos.x, transform.position.y);
        }
    }
}
    
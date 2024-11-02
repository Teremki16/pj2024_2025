using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;

public class SmeikaController : MonoBehaviour
{
    [SerializeField] private GameObject foodPref, tailPref;
    private GameObject food;
    private float stepRate, currentAngle;
    private Vector2 move;
    private List<Transform> tail = new List<Transform>();
    private bool isFoodEaten;
    private Vector2 lBorderPos, rBorderPos, uBorderPos, dBorderPos;
    private void SpawnFood()
    {
        float x = Random.Range(lBorderPos.x, rBorderPos.x);
        float y = Random.Range(uBorderPos.y, dBorderPos.y);
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
        lBorderPos = GameObject.Find("WallL").transform.position;
        rBorderPos = GameObject.Find("WallR").transform.position;
        uBorderPos = GameObject.Find("WallU").transform.position;
        dBorderPos = GameObject.Find("WallD").transform.position;
        InvokeRepeating("Movement", 0.1f, stepRate);
        SpawnFood();
    }
    private void SetDirection()
    {
        if (Input.GetKeyDown(KeyCode.A) && currentAngle != 270f)
        {
            currentAngle = 90f;
        }
        if (Input.GetKeyDown(KeyCode.D) && currentAngle != 90f)
        {
            currentAngle = 270f;
        }
        if (Input.GetKeyDown(KeyCode.W) && currentAngle != 180f)
        {
            currentAngle = 0f;
        }
        if (Input.GetKeyDown(KeyCode.S) && currentAngle != 0f)
        {
            currentAngle = 180f;
        }
    }
}

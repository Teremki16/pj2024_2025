using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using TMPro;
using UnityEngine.UI;

public class CarController : MonoBehaviour
{
    [SerializeField] WheelJoint2D backWheel;
    [SerializeField] WheelJoint2D frontWheel;
    JointMotor2D motor;
    // is this freaking army or what?
    private bool moveForward = false;
    private bool moveBackward = false;

    private float speed = 0f;

    private bool isGrounded = false;

    private Rigidbody2D rb;

    private int fuel = 100;
    [SerializeField] TextMeshProUGUI FuelText;

    public bool fp = false;
    public bool bp = false;

    private float Amount = 0f;

    void Start()
    {
        motor.maxMotorTorque = 100;
        rb = GetComponent<Rigidbody2D>();
        StartCoroutine("FuelReducer");
        StartCoroutine("ChangeColor");
    }
    void Update()
    {
        if (Input.GetKey(KeyCode.UpArrow) || fp )
        {
            moveForward = true;
            moveBackward = false;
        }
        else if (Input.GetKey(KeyCode.DownArrow) || bp)
        {
            moveForward = false;
            moveBackward = true;
        }
        else
        {
            moveForward = false;
            moveBackward = false;
        }

        if (frontWheel.GetComponent<Collider2D>().IsTouchingLayers() ||
            backWheel.GetComponent<Collider2D>().IsTouchingLayers())
        {
            isGrounded = true;
        }
        else
        {
            isGrounded = false;
        }
        CheckGameOver();
    }
    void FixedUpdate()
    {
        MoveOnGround();
        if (!isGrounded)
        {
            MoveInAir();
        }
    }

    void MoveOnGround()
    {
        if (moveForward)
        {
            if (frontWheel.attachedRigidbody.angularVelocity > -2000)
            {
                speed += 40f;
                motor.motorSpeed = speed;
            }
            backWheel.motor = motor;
            frontWheel.motor = motor;
            backWheel.useMotor = true;
            frontWheel.useMotor = true;
        }
        else if (moveBackward)
        {
            if (frontWheel.attachedRigidbody.angularVelocity < 2000)
            {
                speed -= 40f;
                motor.motorSpeed = speed;
            }
            backWheel.motor = motor;
            frontWheel.motor = motor;
            backWheel.useMotor = true;
            frontWheel.useMotor = true;
        }
        else
        {
            speed = -frontWheel.attachedRigidbody.angularVelocity;
            backWheel.useMotor = false;
            frontWheel.useMotor = false;
        }
    }

    private void MoveInAir()
    {
        backWheel.useMotor = false;
        frontWheel.useMotor = false;
        if (moveForward)
        {
            if (rb.angularVelocity > -200)
            {
                rb.AddTorque(10f);
            }
        }
        if (moveBackward)
        {
            if (rb.angularVelocity < -200)
            {
                rb.AddTorque(10f);
            }
        }
    }

    private void CheckGameOver()
    {
        Vector2 rayDir = Vector2.up;
        RaycastHit2D[] hit = Physics2D.RaycastAll(transform.position, rayDir, 0.7f);
        Debug.DrawRay(transform.position, rayDir * 0.7f);
        if (hit.Length > 1)
        {
            GameOver();
        }
    }
    
    private void GameOver()
    {
        SceneManager.LoadScene(0);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "DeadZone")
        {
            GameOver();
        }
        if(collision.gameObject.tag == "Gustavo")
        {
            fuel = 100;
            GameObject.Destroy(collision.gameObject);
        }
        if(collision.gameObject.tag == "Bonus")
        {
            GameObject.Destroy(collision.gameObject);
            Amount += 1f / 14f;
            GameObject Tree = GameObject.Find("Tree");
            Tree.GetComponent<Image>().fillAmount = Amount;
        }
    }

    IEnumerable FuelReducer()
    {
        while (fuel > 0)
        {
            fuel--;
            FuelText.SetText(fuel.ToString());
            yield return new WaitForSeconds(0.5f);
        }
        GameOver();
    }
    
    IEnumerator  ChangeColor()
    {
        while (true)
        {
            GetComponent<SpriteRenderer>().color = new Color(
                Random.Range(0, 1f),
                Random.Range(0, 1f),
                Random.Range(0, 1f));
            yield return new WaitForSeconds(0.0025f);
        }
    }
}

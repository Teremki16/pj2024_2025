using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEditor.Build;
using UnityEngine;
using UnityEngine.SceneManagement;

public class CarController : MonoBehaviour
{
    [SerializeField] WheelJoint2D backWheel;
    [SerializeField] WheelJoint2D frontWheel;
    JointMotor2D motor;

    private bool moveForward = false;
    private bool moveBackward = false;

    private float speed = 0f;

    private bool isGrounded = false;

    private Rigidbody2D rb;

    private int fuel = 100;
    [SerializeField] TextMeshProUGUI FuelText;

    void Start()
    {
        motor.maxMotorTorque = 1000;
        rb = GetComponent<Rigidbody2D>();
        StartCoroutine("FuelReducer");
        StartCoroutine("ChangeColor");
    }


    void Update()
    {
        if (Input.GetKey(KeyCode.UpArrow))
        {
            moveForward = true;
            moveBackward = false;
        }
        else if (Input.GetKey(KeyCode.DownArrow))
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

    private void MoveOnGround()
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
            if (rb.angularVelocity < 200)
            {
                rb.AddTorque(10f);
            }
        }
        if (moveBackward)
        {
            if (rb.angularVelocity > -200)
            {
                rb.AddTorque(-10f);
            }
        }
    }

    private void CheckGameOver()
    {
        Vector2 rayDir = transform.up;
        RaycastHit2D[] hit = Physics2D.RaycastAll(transform.position,
            rayDir, 0.7f);
        Debug.DrawRay(transform.position, rayDir * 0.7f, Color.red);
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
        if (collision.gameObject.tag == "DeadZone")
        {
            GameOver();
        }
        if (collision.gameObject.tag == "Gas")
        {
            fuel = 100;
            GameObject.Destroy(collision.gameObject);
        }
    }


    IEnumerator FuelReducer()
    {
        while (fuel > 0)
        {
            fuel--;
            FuelText.SetText(fuel.ToString());
            yield return new WaitForSeconds(0.5f);
        }
        GameOver();

    }

    IEnumerator ChangeColor()
    {
        while (true)
        {
            GetComponent<SpriteRenderer>().color = new Color(
                Random.Range(0f, 1f),
                Random.Range(0f, 1f),
                Random.Range(0f, 1f)
                );
            yield return new WaitForSeconds(2f);

        }

    }
}

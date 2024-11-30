using System.Collections;
using System.Collections.Generic;
using UnityEditor.Build;
using UnityEngine;

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

    void Start()
    {
        motor.maxMotorTorque = 1000;
        rb = GetComponent<Rigidbody2D>();
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
        if(frontWheel.GetComponent <Collider2D>(). IsTouchingLayers()||
                backWheel .GetComponent <Collider2D>().IsTouchingLayers())
        {
            isGrounded = true;
        }
        else
        {
            isGrounded = false;
        }
    }

    void FixedUpdate()
    {
        if (isGrounded)
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
        else
        {
            backWheel.useMotor = false;
                frontWheel.useMotor = false;
            if (moveForward)
            {
                if(rb.angularVelocity < 200)
                {
                    rb.AddTorque(10f);
                }
            }            if (moveBackward)
            {
                if(rb.angularVelocity > -200)
                {
                    rb.AddTorque(-10f);
                }
            }
        }
    }
    
}
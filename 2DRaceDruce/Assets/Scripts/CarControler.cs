using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarControler : MonoBehaviour
{
    [SerializeField] WheelJoint2D BackWheel;
    [SerializeField] WheelJoint2D FrontWheel;
    JointMotor2D motor;
    void Start()
    {
        motor.maxMotorTorque = 100;
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.D))
        {
            motor.motorSpeed = 1000;
            BackWheel.motor = motor;
            FrontWheel.motor = motor;
            BackWheel.useMotor = true;
            FrontWheel.useMotor = true;
        }
        else if (Input.GetKey(KeyCode.A))
        {
            motor.motorSpeed = 1000;
            BackWheel.motor = motor;
            FrontWheel.motor = motor;
            BackWheel.useMotor = true;
            FrontWheel.useMotor = true;
        }
        else
        {
            BackWheel.useMotor = false;
            FrontWheel.useMotor = false;
        }
    }   
}

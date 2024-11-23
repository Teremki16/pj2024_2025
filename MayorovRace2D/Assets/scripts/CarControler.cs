using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarControler : MonoBehaviour
{
    [SerializeField] WheelJoint2D backWheel;
    [SerializeField] WheelJoint2D frontWheel;
    JointMotor2D motor;

    void Start()
    {
        motor.maxMotorTorque = 100;
    }
    void Update()
    {
        if (Input.GetKey(KeyCode.D))
        {
            motor.motorSpeed = 1000;
            backWheel.motor = motor;
            frontWheel.motor = motor;
            backWheel.useMotor = true;
            frontWheel.useMotor = true;
        }
        else if (Input.GetKey(KeyCode.A))
        {
            motor.motorSpeed = -1000;
            backWheel.motor = motor;
            frontWheel.motor = motor;
            backWheel.useMotor = true;
            frontWheel.useMotor = true;
        }
        else
        {
            backWheel.useMotor = false;
            frontWheel.useMotor = false;
        }
    }

}


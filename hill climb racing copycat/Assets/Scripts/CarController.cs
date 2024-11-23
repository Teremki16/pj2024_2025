using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarController : MonoBehaviour
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
        if (Input.GetKey(KeyCode.UpArrow))
        {
            motor.motorSpeed = 1000;
            backWheel.motor = motor;
            frontWheel.motor = motor;
            backWheel.useMotor = true;
            frontWheel.useMotor = true;
        }else
        {
            motor.motorSpeed = -1000;
            backWheel.useMotor = false;
            frontWheel.useMotor = false;
        }
    }
}
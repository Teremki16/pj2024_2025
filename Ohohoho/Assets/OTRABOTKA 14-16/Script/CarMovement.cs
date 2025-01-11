using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarMovement : MonoBehaviour
{
    [SerializeField] private float carSpeed;
    public bool L = false;
    public bool R = false;
    private void Update()
    {
        if(Input.GetKey(KeyCode.A) || L)
        {
            Move(-carSpeed);
        }
        else if(Input.GetKey(KeyCode.D) || R)
        {
            Move(carSpeed);
        }
    }
    private void Move(float dir)
    {
        transform.Translate(dir * Time.fixedDeltaTime, 0f, 0f);
    }
}

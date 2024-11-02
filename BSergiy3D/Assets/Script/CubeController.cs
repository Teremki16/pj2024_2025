using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CubeController : MonoBehaviour
{
    private Rigidbody rb;
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    
    void Update()
    {
        MovingWithRigidbody(5f);
    }

    public void MovingWithRigidbody(float speed = 4f)
    {
        float dirX = Input.GetAxis("Horizontal");
            float dirZ = Input.GetAxis("Vertical");
        rb.velocity = new Vector3(dirX * speed, rb.velocity.y, dirZ * speed);
    }
}

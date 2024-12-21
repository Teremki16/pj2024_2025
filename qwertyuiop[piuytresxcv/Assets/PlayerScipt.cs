using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerScipt : MonoBehaviour
{
   private Rigidbody2D rb;
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.W))
        {
            rb.AddForce(Vector3.up * 5, ForceMode2D.Impulse);
        }
        if(Input.GetKey(KeyCode.A))
        {
            rb.angularVelocity = -5f;
        } 
        if(Input.GetKey(KeyCode.D))
        {
            rb.angularVelocity = -5f;
        }
    }

    private void FixedUpdate()
    {
        rb.velocity = new Vector3(30, rb.velocity.y) ;
    }
}

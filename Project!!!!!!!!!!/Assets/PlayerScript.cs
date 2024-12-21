using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerScript : MonoBehaviour
{
    private Rigidbody2D rb;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }
   
    void Update()
    { 
         if(Input.GetKeyDown(KeyCode.UpArrow))
         {
            rb.AddForce(Vector3.up * 5, ForceMode2D.Impulse);
         }
         if (Input.GetKey(KeyCode.LeftArrow))
         {
            rb.angularVelocity = -5f;
         }
         if (Input.GetKey(KeyCode.RightArrow))
         {
            rb.angularVelocity = 5f;
         }
    }

    
    private void FixedUpdate()
    {
        rb.velocity = new Vector2(10, rb.velocity.y);
    }
}

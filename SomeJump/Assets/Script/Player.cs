using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    public float speed = 10f;
    public float dir;
    private Rigidbody2D rb;

    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();   
    }

    private void FixedUpdate()
    {
        Vector2 velocity = rb.velocity;
        velocity.x = dir;
        rb.velocity = velocity;

    }

    private void Update()
    {
        dir = Input.GetAxis("Horizontal") * speed;
    }
    public void Jump()
    {

    }
   
}

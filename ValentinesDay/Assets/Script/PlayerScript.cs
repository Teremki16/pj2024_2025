using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerScript : MonoBehaviour
{
    public float moveSpeed = 5f; // Movement speed of the player

    private Rigidbody2D rb;
    private Vector2 moveDirection;
    private bool facingRight = true; // To track the direction the player is facing

    void Start()
    {
        // Get the Rigidbody2D component
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        // Get input from the player (A and D keys)
        moveDirection.x = Input.GetAxisRaw("Horizontal"); // A/D or left/right arrow keys

        // Flip the player when changing direction
        if (moveDirection.x > 0 && !facingRight)
        {
            Flip();
        }
        else if (moveDirection.x < 0 && facingRight)
        {
            Flip();
        }
    }

    void FixedUpdate()
    {
        // Apply movement
        rb.velocity = new Vector2(moveDirection.x * moveSpeed, rb.velocity.y);
    }

    void Flip()
    {
        // Flip the player's sprite
        facingRight = !facingRight;
        Vector3 theScale = transform.localScale;
        theScale.x *= -1; // Reverse the player's X scale to flip
        transform.localScale = theScale;
    }
}

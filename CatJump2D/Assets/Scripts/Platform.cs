using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Platform : MonoBehaviour
{
    [SerializeField] float jumpForce = 10;

    //im nothing like yall

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.relativeVelocity.y <= 0f)
        {
            Rigidbody2D rb = collision.gameObject.GetComponent<Rigidbody2D>();
            if(rb !=null)
            {
                rb.velocity = Vector2.up * jumpForce;
                if (gameObject.tag == "break") Destroy(gameObject);
            }
        }
    }
}

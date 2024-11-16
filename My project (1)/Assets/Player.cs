using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    Rigidbody2D rb;
    [SerializeField] float speed = 5f;
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            rb.AddForce(new Vector2(0, 8f), ForceMode2D.Impulse);
        }
        if (Input.GetKey(KeyCode.D))
        {
            rb.velocity = Vector2.right * speed;
        }
        if (Input.GetKey(KeyCode.A))
        {
            rb.velocity = Vector2.left * speed;
        }
    }
}

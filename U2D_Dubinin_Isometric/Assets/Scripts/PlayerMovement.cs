using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    private Rigidbody2D rb;
    public float moveH, moveV;
    [SerializeField] public float moveSpeed = 1.0f;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        moveH = Input.GetAxis("Horizontal");
        moveV = Input.GetAxis("Vertical");
        rb.velocity = new Vector2(moveH, moveV);
        Vector2 direction = new Vector2(moveH, moveV);
        FindObjectOfType<PlayerAnims>().SetDirection(direction);
    }
}

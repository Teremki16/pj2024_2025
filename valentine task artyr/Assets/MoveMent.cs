using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveMent : MonoBehaviour
{
    private Rigidbody2D rb;
    public float moveH, moveV;
    [SerializeField] public float moveSpeed = 3f;
    public int Heart = 0;
    public ScoreManager scoreManager;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        moveH = Input.GetAxis("Horizontal") * moveSpeed;
        moveV = Input.GetAxis("Vertical") * moveSpeed;
        rb.velocity = new Vector2(moveH, moveV);
        Vector2 direction = new Vector2(moveH, moveV);
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Heart")) 
            scoreManager.AddCoins(1); 
        }
    }

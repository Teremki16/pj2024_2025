using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;
public class PlayerMove : MonoBehaviour
{
    private Rigidbody2D rb;
    public float moveH, moveV;
    [SerializeField] public float moveSpeed = 100000000f;
    [SerializeField] Text text;
    int score = 0;
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }


    void Update()
    {
        moveH = Input.GetAxis("Horizontal") * moveSpeed;
        text = GameObject.Find("ScoreText").GetComponent<Text>();
        rb.velocity = new Vector2(moveH, 0);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "Heart")
        {
            score++;
            text.text = "Score: " + score;
            Destroy(collision.gameObject);
        }
    }
}


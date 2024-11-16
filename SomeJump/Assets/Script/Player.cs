using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Player : MonoBehaviour
{
    public float speed = 10f;
    public float dir;
    private Rigidbody2D rb;
    public int score;

    
    [SerializeField] TextMeshProUGUI scoreText;

    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        score = 0;
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
        GameObject.Find("Money_text").GetComponent<TextMeshProUGUI>().SetText("" + score);
        scoreText.SetText("" + score);
    }
    public void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag=="money")
        {
            score += 1;
            Destroy(collision.gameObject);
        }
    }


}

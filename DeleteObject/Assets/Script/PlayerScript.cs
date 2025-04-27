using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerScript : MonoBehaviour
{
    Rigidbody2D rb;
    public int gas = 10;


    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        if (gas > 0)
        {
            if (Input.GetKeyDown(KeyCode.Space))
            {
                rb.velocity = new Vector2(0, 2);
                gas--;
            }

            if (Input.GetKeyDown(KeyCode.A))
            {
                rb.velocity = new Vector2(-2, rb.velocity.y);
            }

            if (Input.GetKeyDown(KeyCode.D))
            {
                rb.velocity = new Vector2(2, rb.velocity.y);
            }
        }
        GameObject.Find("ScoreText").GetComponent<Text>().text = "Gas" + gas;
    }

    private void OnTriggerEnter2D (Collider2D collision)
    {
        if (collision.gameObject.tag == "Gas")
        {
            Destroy(collision.gameObject);
            gas++;
        }
    }
}

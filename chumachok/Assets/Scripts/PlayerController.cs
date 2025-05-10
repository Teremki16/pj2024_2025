using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{


    [SerializeField] GameObject gameOverPanel;
    [SerializeField] GameObject jump;
    Rigidbody2D rb;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }
    bool isonGround = true;
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && isonGround)
        {
            rb.AddForce(Vector2.up * 7,  ForceMode2D.Impulse);
            isonGround = false;
            
        }
        GetComponent<Animator>().SetFloat("f", rb.velocity.y);
    }

    void OnCollisionEnter2D(Collision2D collider) {


        if (collider.gameObject.tag == "Obstacle") {
            Time.timeScale = 0;
            gameOverPanel.SetActive(true);
        }
        if (collider.gameObject.tag == "Ground")
        {
            isonGround = true;
        }
    }
}

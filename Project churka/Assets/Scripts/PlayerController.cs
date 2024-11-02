using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using TMPro;
using UnityEditor.Animations;

public class PlayerController : MonoBehaviour
{
    private Vector2 direction;
    private float speed = 5f;
    private bool canJump = true;

    public int health = 3;
    public int coins = 0;

    private AnimatorController controller;

    [SerializeField] TextMeshProUGUI coinText;
    [SerializeField] TextMeshProUGUI healthText;

    private Rigidbody2D rb2d;


    void Start()
    {
        rb2d = gameObject.GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && canJump) 
        {
            jump();
        }

    }


    private void OnCollisionEnter2D(Collision2D collision)
    {
        if(collision.gameObject.tag =="ground")
        {
            canJump = true;
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "coin")
        {
            coins++;
            coinText.text = coins + "";
            Destroy(collision.gameObject);
        }
        if (collision.gameObject.tag == "obstacle")
        {
            health--;
            healthText.text = health + "";
            if(health <=0)
            {
                SceneManager.LoadScene(0);
            }
        }
    }

    public void jump()
    {
        if (canJump)
        {
            rb2d.AddForce(Vector2.up * speed, ForceMode2D.Impulse);
            canJump = false;
            gameObject.GetComponent<Animator>().Play("CatRotation360");
        }
    }
}

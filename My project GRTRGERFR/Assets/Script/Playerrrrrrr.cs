using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Playerrrrrrr : MonoBehaviour
{
    Rigidbody2D rb;
    public int Gas = 10;






    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>(); 
    }

    // Update is called once per frame
    void Update()
    {
        if (Gas > 0)
        {


            if (Input.GetKeyDown(KeyCode.Space))
            {
                rb.velocity = new Vector2(0, 5);
                Gas--;
            }
            if (Input.GetKeyDown(KeyCode.A))
            {
                rb.velocity = new Vector2(-1, rb.velocity.y);
            }
            if (Input.GetKeyDown(KeyCode.D))
            {
                rb.velocity = new Vector2(1, rb.velocity.y);
            }
        }
        GameObject.Find("ScoreText").GetComponent<Text>().text = "Gas: " + Gas;
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "Gas")
        {
            Destroy(collision.gameObject);
            Gas++;
        }
    }
}

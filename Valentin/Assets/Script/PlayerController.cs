using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class PlayerController : MonoBehaviour
{
    // Start is called before the first frame update
    private Vector2 movement;
    private float speed = 10;
    public GameObject scoreTXT;
    private int score;

    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        movement = new Vector2(Input.GetAxis("Horizontal")*speed, 0);
    }
    private void FixedUpdate()
    {
        GetComponent<Rigidbody2D>().velocity = movement;
        if(Input.GetAxis("Horizontal")>0)
        {
            GetComponent<SpriteRenderer>().flipX = false;
        }
        else if (Input.GetAxis("Horizontal") <0)
        {
            GetComponent<SpriteRenderer>().flipX = true;
        }
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag=="Heart")
        {
            score += 1;
            //Debug.Log(score);
            Destroy(collision.gameObject);
            scoreTXT.GetComponent<TextMeshProUGUI>().text = "Score:" + score;            
        }
    }
}

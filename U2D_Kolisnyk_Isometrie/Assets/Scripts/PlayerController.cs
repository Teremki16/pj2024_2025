using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    private Rigidbody2D rb;
    public float MoveH, MoveV;
    public float speed = 1f;
    
    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        
    }

    private void Update()
    {
        MoveH = Input.GetAxis("Horizontal")* speed;
        MoveV = Input.GetAxis("Vertical") * speed;
        rb.velocity = new Vector2(MoveH, MoveV);
        Vector2 direction = new Vector2(MoveH, MoveV);
        if(direction.magnitude != 0f)
        FindObjectOfType<PlayerAnim>().SetDir(direction);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.CompareTag("orlan"))
        {
            FindObjectOfType<HealthScrit>().damage(collision.gameObject.transform.position);
        }
    }

}

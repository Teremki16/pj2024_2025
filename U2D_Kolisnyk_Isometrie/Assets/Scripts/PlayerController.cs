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
        FindObjectOfType<PlayerAnim>().SetDir(direction);
    }
}

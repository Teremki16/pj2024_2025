using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class PlayerController : MonoBehaviour
{
    private Rigidbody2D rb;
    public float MoveH;
    [SerializeField] public float moveSpeed = 1f;


    void Start()
    {
        
    }

   
    void Update()
    {
        MoveH = Input.GetAxis("Horizontal");
        
        rb.velocity = new Vector2(MoveH);
        Vector2 direction = new Vector2(MoveH);
        if (direction.magnitude != 0f) ;
            


    }

}

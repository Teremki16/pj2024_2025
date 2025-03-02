using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class PlayerMovement : MonoBehaviour
{
    private Rigidbody rb;
    public float MoveH;
    [SerializeField] public float speed = 1f;
    private void Start()
    {
        rb.GetComponent<Rigidbody2D>();
    }
    void Update()
    {
        MoveH = Input.GetAxis("Horizontal") * speed;
        rb.velocity = new Vector2(MoveH, 0);                                                                 
      
    }

}

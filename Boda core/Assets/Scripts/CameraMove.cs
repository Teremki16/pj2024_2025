using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMove : MonoBehaviour
{
    public float movementSpeed = 10f;
    public float _directionMove;
    private Rigidbody2D rb;

    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();

    }
    private void Update()
    {
        _directionMove = Input.GetAxis("Horizontal") * movementSpeed;

    }

    private void FixedUpdate()
    {
        Vector2 velocity = rb.velocity;
        velocity.x = _directionMove;
        rb.velocity = velocity;
    }
    private void OnAnimatorIK(int layerIndex)
    {
       
            

  }
   }
    

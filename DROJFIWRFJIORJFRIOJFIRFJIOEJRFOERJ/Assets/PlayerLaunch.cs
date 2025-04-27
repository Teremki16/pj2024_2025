using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerLaunch : MonoBehaviour
{
    [SerializeField] float forseValue;
    [SerializeField] float minSpeedToDrag;

    Rigidbody2D rb;
    Camera cam;

    Vector2 startPos;
    bool canDrag = true;

    private void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
        cam = Camera.main;
    }

    private void Start()
    {
        rb.isKinematic = true;
    }

    private void OnMouseDown()
    {
        float playerSpeed = rb.velocity.magnitude;
        if(playerSpeed < minSpeedToDrag)
        {
            canDrag = true;
            startPos = transform.position;
            rb.isKinematic = true;
            rb.velocity = Vector2.zero;
        }
    }

    private void OnMouseDrag()
    {
        if (canDrag)
        {
            Vector2 mousePosition = cam.ScreenToWorldPoint(Input.mousePosition);
            transform.position = new Vector3(mousePosition.x, mousePosition.y, 0);
        }
    }

    private void OnMouseUp()
    {
        if (canDrag)
        {
            Vector2  currPos = transform.position;
            Vector2 direction = startPos - currPos;
            rb.isKinematic = false;
            rb.AddForce(direction * forseValue, ForceMode2D.Impulse);
            canDrag = false;
            
        }
    }
}

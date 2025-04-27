using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerLaunch : MonoBehaviour
{
    [SerializeField] float forceValue;
    [SerializeField] float minDragSpeed;

    private Rigidbody2D rb;
    private Camera mainCamera;

    private Vector2 startPosition;
    public bool canDrag;

    private void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
        mainCamera = Camera.main;
    }

    private void Start()
    {
        rb.isKinematic = true;
    }

    private void OnMouseDown()
    {
        float playerSpeed = rb.velocity.magnitude;
        if (playerSpeed < minDragSpeed)
        {
            canDrag = true;
            rb.isKinematic = true;
            rb.velocity = Vector2.zero;
            startPosition = transform.position;
        }
    }

    private void OnMouseDrag()
    {
        if(canDrag)
        {
            Vector2 mousePosition = mainCamera.
                ScreenToWorldPoint(Input.mousePosition);
            transform.position = mousePosition;
        }
    }

    private void OnMouseUp()
    {
        if (canDrag)
        {
            Vector2 direction = startPosition - rb.position;
            rb.isKinematic = false;
            rb.AddForce(direction * forceValue, ForceMode2D.Impulse);
            canDrag = false;
        }
    }
}

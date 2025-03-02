using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMirrorScript: MonoBehaviour
{
    public float moveSpeed = 5f;
    private float moveInput;

    private SpriteRenderer spriteRenderer;

    void Start()
    {
        spriteRenderer = GetComponent<SpriteRenderer>();
    }

    void Update()
    {
        moveInput = Input.GetAxisRaw("Horizontal");

        if (moveInput < 0)
        {
            spriteRenderer.flipX = true;
        }
        else if (moveInput > 0)
        {
            spriteRenderer.flipX = false;
        }

        transform.Translate(Vector2.right * moveInput * moveSpeed * Time.deltaTime);
    }
}

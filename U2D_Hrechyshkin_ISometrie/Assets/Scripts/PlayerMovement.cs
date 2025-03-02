using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    private Rigidbody2D rb;
    public float moveH, moveV;
    [SerializeField] public float moveSpeed = 1f;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        moveH = Input.GetAxis("Horizontal") * moveSpeed;
        moveV = Input.GetAxis("Vertical") * moveSpeed;
        rb.velocity = new Vector2(moveH, moveV);
        Vector2 direction = new Vector2(moveH, moveV);
        if(direction.magnitude != 0f)
        FindObjectOfType<PlayerAnimations>().SetDirection(direction);

    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("Enemy"))
        {
            FindObjectOfType<HealthScript>()
                .Damage(collision.gameObject.transform.position);
        }
    }
}

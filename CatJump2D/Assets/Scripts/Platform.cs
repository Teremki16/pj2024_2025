using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Platform : MonoBehaviour
{
    [SerializeField] float jumpForce = 10f;
    [SerializeField] GameObject jewel;
    [SerializeField] GameObject particles;
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.relativeVelocity.y <= 0f)
        {
            Rigidbody2D rb = collision.gameObject.GetComponent<Rigidbody2D>();
            if(rb != null)
            {
                rb.velocity = Vector2.up * jumpForce;
                GameObject.Instantiate(particles,
                    new Vector3(transform.position.x,
                    transform.position.y - 0.1f,
                    transform.position.z), Quaternion.identity);

                collision.gameObject.GetComponent<Animator>().SetTrigger("jump");
                if (gameObject.tag == "break") Destroy(gameObject);
            }
        }
    }

    private void Start()
    {
        if(Random.Range(0, 100) > 75)
        {
            Instantiate(jewel, new Vector3(
                transform.position.x,
                transform.position.y + 1f,
                transform.position.z),
                Quaternion.identity);
        }
    }

}

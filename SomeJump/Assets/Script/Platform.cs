using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Platform : MonoBehaviour
{
   
    public float jumpForce = 7f;

    [SerializeField] GameObject particles;

    
    private void OnCollisionEnter2D(Collision2D collision)
    {
        
        if (collision.relativeVelocity.y <= 0f)
        {
            Rigidbody2D rb = collision.gameObject.GetComponent<Rigidbody2D>();
            if( rb != null )
            {
                rb.velocity = Vector2.up * jumpForce;
                collision.gameObject.GetComponent<Animator>().SetTrigger("Jump");
                if (gameObject.tag == "break") Destroy(gameObject);
                GameObject.Instantiate(particles,new Vector3(collision.gameObject.transform.position.x,collision.gameObject.transform.position.y-0.1f,transform.position.z),Quaternion.identity);
            }
        }
    }
}

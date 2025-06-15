using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class BallScript : MonoBehaviour
{
    [SerializeField] GameObject ball;
    Rigidbody2D rb;
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        Vector2 dir = new Vector2(
            Random.Range(-1f, 1f),
            Random.Range(-1f, 1f)
            ).normalized;
        rb.velocity = dir * 5;
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Finish"))
        {
            SceneManager.LoadScene(0);
        }
        if (collision.gameObject.CompareTag("Block"))
        {
            Destroy(collision.gameObject);
            if (Random.Range(0, 10) > 7)
            Instantiate(ball, transform.position + Vector3.up, Quaternion.identity);
        }
    }
}

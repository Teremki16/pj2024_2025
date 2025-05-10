using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    Animation animator;
    [SerializeField] float jumpForse;
    [SerializeField] GameObject gameOverPanel;
    void Start()
    {
        animator = GetComponent<Animation>();
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            GetComponent<Rigidbody2D>().AddForce(Vector2.up * 5,ForceMode2D.Impulse);
        }
        animator.Play(verx)
    }

    void OnCollisionEnter2D(Collision2D collider) {


        if (collider.gameObject.tag == "Obstacle") {
            Time.timeScale = 0;
            gameOverPanel.SetActive(true);
        }
    }
}

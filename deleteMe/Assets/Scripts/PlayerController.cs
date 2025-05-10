using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    private Rigidbody2D ts;

    [SerializeField] GameObject gameOverPanel;
    void Start()
    {
        ts = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            ts.AddForce(new Vector2(0, 6f), ForceMode2D.Impulse);
        }
    }

    void OnCollisionEnter2D(Collision2D collider) {


        if (collider.gameObject.tag == "Obstacle") {
            Time.timeScale = 0;
            gameOverPanel.SetActive(true);
        }
    }
}

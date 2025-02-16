using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PickUp : MonoBehaviour
{
    private Text scoreText;
    private int score;
    private void Awake()
    {
        scoreText = GameObject.Find("ScoreText").GetComponent<Text>();
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.CompareTag("Heart"))
        {
            Destroy(collision.gameObject);
            score++;
            scoreText.text = $"Score: {score}";
        }
        else if(collision.CompareTag("Ground"))
        {
            Destroy(gameObject);
        }
    }
}

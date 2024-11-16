using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using TMPro;

public class Player : MonoBehaviour
{
    
    [SerializeField] TextMeshProUGUI scoreText;
    
    public float movementSpeed = 10f;
    public float _directionMove;
    private Rigidbody2D rb;

    public int score = 0;

    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    private void Update()
    {
        _directionMove = Input.GetAxis("Horizontal") * movementSpeed;
        GameObject.Find("ScoreText").GetComponent<TextMeshProUGUI>()
            .SetText(score + "");
        //_directionMove = Input.acceleration.x * movementSpeed;
        scoreText.text = score + "";
    }

    private void FixedUpdate()
    {
        Vector2 velocity = rb.velocity;
        velocity.x = _directionMove;
        rb.velocity = velocity;
    }

    
}

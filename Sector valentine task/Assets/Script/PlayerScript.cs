using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerScript : MonoBehaviour { 
private Rigidbody2D rb;
public float moveH, moveV;
[SerializeField] public float moveSpeed = 3f;
    public Text scoreText; 
    private static int score = 0; 
     Text fgfg;

void Start()
{
    rb = GetComponent<Rigidbody2D>();
}

void Update()
{
    moveH = Input.GetAxis("Horizontal") * moveSpeed;
    rb.velocity = new Vector2(moveH,0);

        
        GameObject.Find("ScoreText").GetComponent<Text>().text = ("Score");
        score++;


    }
}

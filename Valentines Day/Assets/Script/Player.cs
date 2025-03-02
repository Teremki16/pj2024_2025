using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Player : MonoBehaviour
{
    private Rigidbody2D rb;
    public float moveH;
    [SerializeField] public float moveSpeed = 10f;
    public int score = 0;
    [SerializeField] Text Text;
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }
    void Update()
    {
        moveH = Input.GetAxis("Horizontal") * moveSpeed;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        rb.velocity = new Vector2(moveH,0);
        GameObject.Find("ScoreText").GetComponent<Text>().text = "ScoreText" + score;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    } 

}



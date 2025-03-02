using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoreManager : MonoBehaviour
{
    public int score = 0;
    public Text ScoreText;

    void Update()
    {

        UpdateScoreText();
    }


    public void AddCoins(int amount)
    {
        score += amount;
        UpdateScoreText();
    }


    void UpdateScoreText()
    {
        ScoreText.text = "Heart: " + score.ToString();
    }
}
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameManagerScript : MonoBehaviour
{
    float timer;

    [SerializeField] GameObject obstacle;

    float delay;
    int score;

    [SerializeField] Text scoreText;
    [SerializeField] Text resultText;

    void Start()
    {
        timer = Time.time;
        delay = (Random.value * 2) + 1;
    }


    void Update()
    {
        score = Mathf.RoundToInt(Time.time * 10);
        scoreText.text = $"Score: {score}";
        resultText.text = $"{score}";
        if (Time.time >= timer + delay) {
            int randomInt = Random.Range(0, 2);
            if (randomInt == 0) {
                Instantiate(obstacle, new Vector3(10f, -3.62f, 0f), Quaternion.identity);
            } else {
                Instantiate(obstacle, new Vector3(10f, -2.45f, 0f), Quaternion.identity);
            }
            timer = Time.time;
            delay = (Random.value * 2) + 1;
        }
    }

    public void Reload() {
        Time.timeScale = 1;
        SceneManager.LoadScene("SampleScene");
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class ResultController : MonoBehaviour
{
    float currentLevelTime = 0;
    [SerializeField] TextMeshProUGUI timeText;
    [SerializeField] GameObject resultPanel;
    [SerializeField] TextMeshProUGUI timeResultText;
    [SerializeField] TextMeshProUGUI starResultText;

    [SerializeField] GameObject NextButton;
    [SerializeField] GameObject MenuButton;

    private void Tick()
    {
        currentLevelTime += 0.1f;
        timeText.SetText(string.Format("{0:N1} s", currentLevelTime));
    }

    public void StartWatch()
    {
        InvokeRepeating(nameof(Tick), 0f, 0.1f);
    }

    public void StopWatch()
    {
        CancelInvoke();
    }

    public void LoseResult()
    {
        StopWatch();
        resultPanel.SetActive(true);
        int starCount = 0;
        if (currentLevelTime < 10)
        {
            starCount = 5;
        }
        else if (currentLevelTime < 20)
        {
            starCount = 4;
        }
        else if (currentLevelTime < 30)
        {
            starCount = 3;
        }
        else if (currentLevelTime < 40)
        {
            starCount = 2;
        }
        else
        {
            starCount = 1;
        }
        starResultText.SetText("Star: " + starCount.ToString());
        float BestScore = PlayerPrefs.GetFloat("BestScore");
        if (currentLevelTime < BestScore)
        {
            PlayerPrefs.SetFloat("BestScore", currentLevelTime);
            timeResultText.SetText($"New best score {currentLevelTime}");
        }
        else
        {
            timeResultText.SetText($"You archived absolutely nothing, why are you still here? Not gonna lie, I think you gotta kill youself now");
        }
        Time.timeScale = 0;
        NextButton.GetComponentInChildren<TextMeshProUGUI>()
            .SetText("Next level");
        NextButton.GetComponent<Button>().onClick.AddListener(GoToNextLevel);
        MenuButton.GetComponent<Button>().onClick.AddListener(GoToMenu);
    }

    public void SaveResult()
    {
        StopWatch();
        resultPanel.SetActive(true);
        int starCount = 0;
        if (currentLevelTime < 10)
        {
            starCount = 5;
        }
        else if (currentLevelTime < 20)
        {
            starCount = 4;
        }
        else if (currentLevelTime < 30)
        {
            starCount = 3;
        }
        else if (currentLevelTime < 40)
        {
            starCount = 2;
        }
        else
        {
            starCount = 1;
        }
        starResultText.SetText("Star: " + starCount.ToString());
        float BestScore = PlayerPrefs.GetFloat("BestScore");
        if (currentLevelTime < BestScore)
        {
            PlayerPrefs.SetFloat("BestScore", currentLevelTime);
            timeResultText.SetText($"New best score {currentLevelTime}");
        }
        else
        {
            timeResultText.SetText($"You archived absolutely nothing, why are you still here? Not gonna lie, I think you gotta kill youself now");
        }
        Time.timeScale = 0;
        NextButton.GetComponentInChildren<TextMeshProUGUI>()
            .SetText("Next level");
        NextButton.GetComponent<Button>().onClick.AddListener(GoToNextLevel);
        MenuButton.GetComponent<Button>().onClick.AddListener(GoToMenu);
    }

    public void GoToNextLevel()
    {
        int currentLevel = SceneManager.GetActiveScene().buildIndex;
        int maxLevel = SceneManager.sceneCountInBuildSettings;
        if (currentLevel == maxLevel)
        {
            SceneManager.LoadScene(0);
        }
        else
        {
            SceneManager.LoadScene(currentLevel + 1);
        }
    }

    public void GoToMenu()
    {
        SceneManager.LoadScene(0);
    }
}

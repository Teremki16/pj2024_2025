using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameController : MonoBehaviour
{
    [SerializeField] GameObject panel;

    private void Start()
    {
        Time.timeScale = 1;
    }

    public void Pause()
    {
        panel.SetActive(true);
        Time.timeScale = 1;
    }

    public void UnPause()
    {
        panel.SetActive(false);
        Time.timeScale = 1;
    }

    public void GoToMenu()
    {
        SceneManager.LoadScene(0);
    }

    public void StartGame()
    {
        SceneManager.LoadScene(1);
    }

    public void QuitGame()
    {
        Application.Quit();
    }
}

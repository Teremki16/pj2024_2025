using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameController : MonoBehaviour
{
    [SerializeField] GameObject panel;

    public void Pause()
    {
        panel.SetActive(true);
        Time.timeScale = 0;
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
}

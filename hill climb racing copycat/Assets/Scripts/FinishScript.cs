using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class FinishScript : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "wheel")
        {
            int sceneIndex = SceneManager.GetActiveScene().buildIndex;
            int nextLevel = sceneIndex + 1;
            PlayerPrefs.SetInt("currentLevel", nextLevel);
            SceneManager.LoadScene(nextLevel);
        }
    }
}

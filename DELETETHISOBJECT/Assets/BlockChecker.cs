using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class BlockChecker : MonoBehaviour
{
    void Update()
    {
        if (GameObject.FindGameObjectsWithTag("Target").Length == 0)
        {
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }
    }
}

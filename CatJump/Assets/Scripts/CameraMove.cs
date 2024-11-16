using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class CameraMove : MonoBehaviour
{
    [SerializeField] GameObject GameOverPanel;
    private GameObject target;
    public float speed = 100f;
    void Start()
    {
        target = FindObjectOfType<Player>().gameObject;
        Time.timeScale = 1;
    }

    // Update is called once per frame
    void Update()
    {
        if (gameObject.transform.position.y <= target.transform.position.y)
        {
            Vector3 newPos = new Vector3(gameObject.transform.position.x,
                target.transform.position.y,
                gameObject.transform.position.z);
            gameObject.transform.position = Vector3.Lerp(transform.position,
                newPos, speed);
        }

        if (target.transform.position.y < transform.position.y - 10f)
        {
            GameOverPanel.SetActive(true);
            Time.timeScale = 0;
        }
    }

    public void TryAgain()
    {
    SceneManager.LoadScene(0);
    }
    
    public void QuitGame() 
    {
        Application.Quit();
    }
}

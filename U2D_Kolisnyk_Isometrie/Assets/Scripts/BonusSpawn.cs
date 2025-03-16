using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class BonusSpawn : MonoBehaviour
{
    public int score;
    [SerializeField] TextMeshProUGUI scoretxt;
    [SerializeField] int goalscore = 25;

    [SerializeField] GameObject victorypanel;
    [SerializeField] GameObject coin;
    private void Start()
    {
        StartCoroutine(nameof(spawn));
    }
    private void Update()
    {
        scoretxt.text = score+"/"+goalscore;
        if(score>=goalscore)
        {
            victorypanel.SetActive(true) ;
            
        }
    }
    IEnumerator spawn()
    {
        while(true)
        {
            Vector2 bottomleft = Camera.main.ViewportToWorldPoint(new Vector2(0,0));
            Vector2 topleft = Camera.main.ViewportToWorldPoint(new Vector2(1, 1));
            float x = Random.Range(bottomleft.x, topleft.x);
            float y = Random.Range(bottomleft.y, topleft.y);
            Instantiate(coin, new Vector3 (x, y, -1),Quaternion.identity);
            yield return new WaitForSecondsRealtime(2f);
        }  
    }
    public void Restart()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }
    public void Next()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex+1);
    }
    public void MenuOpen()
    {
        SceneManager.LoadScene(0);
    }
}

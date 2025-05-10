using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ToocingObjects : MonoBehaviour
{
    int health = 3;
    Transform spawnPoint;
    Rigidbody2D rb;
    [SerializeField] Slider hpSlider;
    [SerializeField] Image fillArea;


    private void Awake()
    {
        spawnPoint = GameObject.Find("SpawnPoint").transform;
        rb = GetComponent<Rigidbody2D>();
    }

    void Damage(int VALUE)
    {
        rb.velocity = Vector2.zero;
        rb.angularVelocity = 0;
        rb.isKinematic = true;
        transform.position = spawnPoint.position;
        health -= VALUE;
        hpSlider.value = health;
        if(health < 3)
        {
            fillArea.color = Color.yellow;
        }
        else if(health < 2)
        {
            fillArea.color = Color.green;
        }
        else
        {
            fillArea.color = Color.cyan;
        }
        if(health <= 0)
        {
            Debug.Log("MisionFailed");
            FindAnyObjectByType<PlayerLaunch>().isStarted = false;
            FindAnyObjectByType<ResultControler >().StopWatch();

        }    
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("Obstacles")) 
        {
            Damage(collision.gameObject.GetComponent<ObstaclesSettings>()
                .damageValue);
        }
        if(collision.gameObject.CompareTag("Finish"))
        {
            Destroy(gameObject);
            Debug.Log("Поздравляю");
            FindAnyObjectByType<ResultControler>().SaveResult();
        }
    }
}







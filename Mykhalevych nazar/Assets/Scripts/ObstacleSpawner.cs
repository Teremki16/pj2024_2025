using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObstacleSpawner : MonoBehaviour
{
    [SerializeField] GameObject[] ObstacleObject;
    [SerializeField] float freq = 3;

    private void SpawnObstacle()
    {
        int number = Random.Range(0, ObstacleObject.Length);
        Instantiate(ObstacleObject[number], transform.position, Quaternion.identity);
    }

    private void Start()
    {
        InvokeRepeating("SpawnObstacle", 1, freq);
    }
}
